import { Box, Button, Image, Text, VStack, HStack, IconButton, Alert, Toast, useToast } from 'native-base';
//CloseIcon
import { CloseIcon } from 'native-base';
export default ({
    id,
    status,
    variant,
    title,
    description,
    isClosable,
    ...rest
  }:
     {
        id: string;
        status: 'success' | 'error' | 'warning' | 'info';
        variant: 'solid' | 'subtle' | 'outline' | 'top-accent'| 'left-accent',
        title: string;
        description: string;
        isClosable: boolean;
        }
  
  )  => {
    const toast = useToast();
  return <Alert maxWidth="90%" p={5} alignSelf="center" flexDirection="row" status={status ? status : "info"} variant={variant} {...rest}>
      <VStack space={1} flexShrink={1} w="100%">
        <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text fontSize="md" fontFamily={"Gilroy-Bold"} fontWeight="medium" flexShrink={1} color={variant === "solid" ? "lightText" : variant !== "outline" ? "darkText" : null}>
              {title}
            </Text>
          </HStack>
          {isClosable ? <IconButton variant="unstyled" icon={<CloseIcon size="3" />} _icon={{
          color: variant === "solid" ? "lightText" : "darkText"
        }} onPress={() => toast.close(id)} /> : null}
        </HStack>
        <Text fontFamily={"Gilroy-Regular"} px="6" color={variant === "solid" ? "lightText" : variant !== "outline" ? "darkText" : null}>
          {description}
        </Text>
      </VStack>
    </Alert>;
};
