import PropTypes from "prop-types";

export default function QnaList({ contents, onDelete }) {
  return (
    <ul>
      {contents.map((content, index) => {
        return (
          <li key={index}>
            {content}
            <button
              onClick={() => {
                onDelete(index);
              }}
            >
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
}

QnaList.propTypes = {
  contents: PropTypes.array.isRequired,
};
