package jungyeon.portfolio.domain.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import jungyeon.portfolio.domain.comment.entity.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
