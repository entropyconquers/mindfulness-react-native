import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Box, Button, Image, Text } from 'native-base';
import Primary_Button from '../components/Primary_Button';
import Logo from '../assets/images/logo.svg';

type BackgroundType = {
    blobs: {
        topLeft: boolean,
        topRight: boolean,
        midRight: boolean,
        midLeft: boolean,
        bottomLeft: boolean,
        bottomRight: boolean,
    },
    showLogo: boolean,
    blobColors: {
        //topLeft is require statement
        topLeft: any,
        topRight: any,
        midRight: any,
        midLeft: any,
        bottomLeft: any,
        bottomRight: any,

    }
}

export default ({blobs, showLogo, blobColors}: BackgroundType) => {
    return <View style={{
        width: "100%",
        height: "100%",
        position: "absolute",
    }}>
       {blobs['topLeft'] && <Image
            position={"absolute"}
            top={-100}
            left={-100}
            source={blobColors['topLeft']}
            alt="blob"
            width={300}
            height={300}
        />} 
         {blobs['topRight'] && <Image
            position={"absolute"}
            top={-150}
            right={-150}
            source={blobColors['topRight']}
            alt="blob"
            width={500}
            height={500}
            opacity={0.8}
        />  }
          {blobs['midRight'] && <Image
            position={"absolute"}
            top={0}
            right={-150}
            source={blobColors['midRight']}
            alt="blob"
            width={500}
            height={500}
        />  }
            {blobs['midLeft'] && <Image
            position={"absolute"}
            top={50}
            left={-150}
            source={blobColors['midLeft']}
            alt="blob"
            width={500}
            height={500}
        />  }
        {blobs['bottomLeft'] && <Image
            position={"absolute"}
            bottom={50}
            left={-150}
            source={blobColors['bottomLeft']}
            alt="blob"
            width={500}
            height={500}
        />  }
        {blobs['bottomRight'] && <Image
            position={"absolute"}
            bottom={50}
            right={-150}
            source={blobColors['bottomRight']}
            alt="blob"
            width={500}
            height={500}
        />  }
        <Box
            position={"absolute"}
            top={100}
            left={5}
        >
            {showLogo && <Logo width={150} height={40} /> }
        </Box>

        
    </View>
  
}