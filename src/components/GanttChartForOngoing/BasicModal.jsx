import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const BasicModal = (props) => {
  const { isOpen, onClose, direct, name } = props;
  console.log("direct", direct);
  const finalRef = useRef(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/projectdetail/${direct}`);
  };
  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Text padding={"10px"}>
            It will direct to {name}. Do you want to continue?
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              handleClick();
            }}
          >
            Continue
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default BasicModal;
