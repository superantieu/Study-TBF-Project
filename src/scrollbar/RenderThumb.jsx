const RenderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: "#e7dede", // Màu của nút thumb dọc
    borderRadius: "4px",
  };

  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};
export default RenderThumb;
