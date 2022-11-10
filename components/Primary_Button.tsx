import { Button, Text } from 'native-base';
import { buttonProps } from '../types';
export default  (buttonProps:buttonProps) => {
    return <Button
    backgroundColor={buttonProps.backgroundColor ? buttonProps.backgroundColor : 'brand.400'}
    width={'90%'}
    p={6}
    m={4}
    borderRadius={12}
    onPress={buttonProps.onPress}>
      <Text fontSize={'2xl'} 
      color={buttonProps.color ? buttonProps.color:'white'}
      fontFamily={'Gilroy-SemiBold'}
      letterSpacing={3}
      textTransform={'uppercase'}

      >
        {buttonProps.title}
      </Text>
    </Button>
  
}