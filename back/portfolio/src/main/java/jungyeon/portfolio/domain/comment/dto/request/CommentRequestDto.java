package jungyeon.portfolio.domain.comment.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CommentRequestDto {

	@Schema(description = "이메일")
	private String email;

	@Schema(description = "이름")
	private String name;

	@Schema(description = "프로필 이미지")
	private String image;

	@Schema(description = "방명록 내용")
	private String comment;
}
