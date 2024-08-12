package jungyeon.portfolio.domain.comment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import jungyeon.portfolio.domain.comment.dto.request.CommentRequestDto;
import jungyeon.portfolio.domain.comment.dto.response.CommentInfo;
import jungyeon.portfolio.domain.comment.dto.response.CommentResponseDto;
import jungyeon.portfolio.domain.comment.entity.Comment;
import jungyeon.portfolio.domain.comment.repository.CommentRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommentService {

	private final CommentRepository commentRepository;

	@Value("${comment.pwd}")
	private String delPwd;

	/**
	 * 방명록 생성
	 */
	public Void commentCreate(CommentRequestDto commentRequestDto) {

		Comment comment = commentRepository.save(Comment.builder()
			.email(commentRequestDto.getEmail())
			.name(commentRequestDto.getName())
			.image(commentRequestDto.getImage())
			.comment(commentRequestDto.getComment())
			.build());

		return null;
	}

	/**
	 * 방명록 조회
	 */
	public CommentResponseDto commentGet(Pageable pageable) {

		Page<Comment> commentPage = commentRepository.findAll(pageable);

		List<CommentInfo> commentList = commentPage.stream()
			.map(c -> CommentInfo.builder()
				.id(c.getId())
				.email(c.getEmail())
				.name(c.getName())
				.image(c.getImage())
				.comment(c.getComment())
				.createdAt(c.getCreatedAt())
				.build())
			.toList();

		return CommentResponseDto.builder()
			.totalCount(commentPage.getTotalElements())
			.nowPage(commentPage.getNumber())
			.maxPage(commentPage.getTotalPages())
			.isLast(commentPage.isLast())
			.commentList(commentList)
			.build();
	}

	/**
	 * 방명록 삭제
	 */
	public Void commentDelete(Integer id, String pwd) {

		if (!pwd.equals(delPwd)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 요청: 비밀번호가 틀렸습니다.");
		}

		commentRepository.deleteById(id);

		return null;
	}
}
