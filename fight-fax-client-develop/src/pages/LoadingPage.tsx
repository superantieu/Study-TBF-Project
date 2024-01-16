import { useState, useEffect } from "react";
import { Text, Flex } from "@chakra-ui/react";

const LoadingPage = () => {
    const [dots, setDots] = useState(""); // Khởi tạo văn bản dấu chấm rỗng

    useEffect(() => {
        const interval = setInterval(() => {
            // Mỗi 500ms, thêm một dấu chấm và cập nhật văn bản
            setDots((prevDots) => (prevDots === "..." ? "." : prevDots + "."));
        }, 500);

        return () => {
            clearInterval(interval); // Dừng interval khi component unmount
        };
    }, []);

    return (
        <Flex
            position="fixed"
            direction={"column"}
            top="0"
            left="0"
            w="full"
            h="full"
            align="center"
            justify="center"
            zIndex="9999"
        >
            <Text fontWeight={700} fontSize={"44px"} mb="4">
                {import.meta.env.VITE_APP_TITLE.toUpperCase()}
            </Text>
            <Text>Loading{dots}</Text>
        </Flex>
    );
};

export default LoadingPage;
