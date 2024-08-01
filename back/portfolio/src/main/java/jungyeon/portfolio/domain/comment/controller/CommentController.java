package jungyeon.portfolio.domain.comment.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jungyeon.portfolio.domain.comment.dto.request.CommentRequestDto;
import jungyeon.portfolio.domain.comment.dto.response.CommentResponseDto;
import jungyeon.portfolio.domain.comment.service.CommentService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/comments")
@Tag(name = "Comment", description = "방명록 API")
public class CommentController {

	private final CommentService commentService;

	// 방명록 등록
	@PostMapping("")
	@Operation(summary = "방명록 등록")
	public ResponseEntity<Void> createComment(@RequestBody CommentRequestDto commentRequestDto) {

		return new ResponseEntity<>(commentService.commentCreate(commentRequestDto), HttpStatus.OK);
	}

	// 방명록 조회
	@GetMapping("")
	@Operation(summary = "방명록 조회")
	public ResponseEntity<CommentResponseDto> getComment(
		@PageableDefault(size = 20, page = 0, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable) {

		return new ResponseEntity<>(commentService.commentGet(pageable), HttpStatus.OK);
	}
}
