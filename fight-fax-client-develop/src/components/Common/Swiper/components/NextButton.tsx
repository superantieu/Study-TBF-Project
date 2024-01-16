import { Button, Icon } from "@chakra-ui/react";

import { AiOutlineRight } from "react-icons/ai";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextButton = (props: any) => {
    const { onClick } = props;
    return (
        <Button
            variant={"slide-button"}
            size="tiny"
            position="absolute"
            right="0"
            top="50%"
            transform={"auto"}
            translateX={"50%"}
            translateY={"-75%"}
            zIndex={9}
            _hover={{
                transform: "auto",
                scale: "1.4",
            }}
            onClick={onClick}
        >
            <Icon as={AiOutlineRight} />
        </Button>
    );
};

export default NextButton;
