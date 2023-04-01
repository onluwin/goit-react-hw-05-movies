export const ReviewsList = ({ data }) => {
  return (
    <ul>
      {data.map(({ author, content }) => (
        <li key={author}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
