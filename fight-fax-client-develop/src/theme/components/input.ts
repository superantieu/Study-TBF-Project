export const inputStyles = {
    Input: {
        variants: {
            "search-ranking": {
                field: {
                    w: "full",
                    h: "32px",
                    borderRadius: "10px",
                    outline: "1px solid #ccc",
                    pl: 3,
                    pr: 3,
                    boxShadow: "none",
                    _focus: {
                        borderColor: "#9280FF",
                        boxShadow: "0px 1px 8px #888888",
                    },
                    _hover: {
                        color: "red",
                    },
                },
            },
        },
        sizes: {
            primary: {
                field: {
                    w: "600px",
                    h: "40px",
                    outline: "1px solid #fff",
                },
            },
        },
        baseStyle: {
            field: { color: "red" },
        },
    },
};
