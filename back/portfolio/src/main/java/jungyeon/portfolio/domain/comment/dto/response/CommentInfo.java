package jungyeon.portfolio.domain.comment.dto.response;

import java.time.LocalDateTime;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class CommentInfo {

	@Schema(description = "방명록id")
	private Integer id;

	@Schema(description = "이메일")
	private String email;

	@Schema(description = "이름")
	private String name;

	@Schema(description = "프로필 이미지")
	private String image;

	@Schema(description = "방명록 내용")
	private String comment;

	@Schema(description = "등록날짜")
	private LocalDateTime createdAt;
}
