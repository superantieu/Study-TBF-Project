import { Box, List } from "@chakra-ui/react";
import Slider, { Settings } from "react-slick";

interface SwiperProps {
    children: React.ReactNode;
    customPrevButton?: JSX.Element;
    customNextButton?: JSX.Element;
    options?: Settings;
}
const Swiper: React.FC<SwiperProps> = ({
    children,
    customNextButton,
    customPrevButton,
    options,
}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: customNextButton,
        prevArrow: customPrevButton,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        appendDots: (dots: any) => (
            <List
                as="ul"
                sx={{
                    "li > button": {
                        _before: {
                            color: "white",
                            opacity: 1,
                        },
                    },
                    ".slick-active > button": {
                        _before: {
                            color: "red !important",
                            opacity: "1 !important",
                            transform: "auto",
                            scale: "1.8",
                        },
                    },
                }}
            >
                {dots}
            </List>
        ),
        ...options,
    };
    return (
        <Box w={`calc(100% - 20px)`} h="full">
            <Slider {...settings}>{children}</Slider>
        </Box>
    );
};

export default Swiper;
