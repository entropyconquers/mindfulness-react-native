import { StyleSheet, TouchableOpacity } from 'react-native';
import { JournalProps, MemoryGameProps, MoodProps, SplashProps } from '../types';
import { View } from 'react-native';
import { Box, Button, Divider, HStack, Image, SimpleGrid, Text, VStack, useToast } from 'native-base';
import Primary_Button from '../components/Primary_Button';
import Logo from '../assets/images/logo.svg';
import Background from '../components/Background';
import AnimatedLottieView from 'lottie-react-native';
import { LinearGradient } from 'react-native-svg';
import Happy from '../assets/images/happy.svg';
import Sad from '../assets/images/sad.svg';
import Neutral from '../assets/images/neutral.svg';
import { ArrowBackIcon } from 'native-base';
import { useEffect, useState } from 'react';
import ToastAlert from '../components/Toast';
const showLogo = true;

const blobs = {
    topLeft: true,
    topRight: false,
    midRight: false,
    midLeft: false,
    bottomLeft: true,
    bottomRight: false,
}
const blobColors = {
    topLeft: require('../assets/images/blob_blue.png'),
    topRight: require('../assets/images/blob_blue.png'),
    midRight: require('../assets/images/blob_blue.png'),
    midLeft: require('../assets/images/blob_blue.png'),
    bottomLeft: require('../assets/images/blob_blue.png'),
    bottomRight: require('../assets/images/blob_blue.png'),


}

const generateEmojiList = () => {
    // Generate a list of 8 random emojis
    let allEmojis = [
      "😀",
      "😁",
      "😂",
      "😃",
      "😄",
      "😅",
      "😆",
      "😇",
      "😈",
      "👿",
      "😉",
      "😊",
      "☺️",
      "😋",
      "😌",
      "😍",
      "😎",
      "😏",
      "😐",
      "😑",
      "😒",
      "😓",
      "😔",
      "😕",
      "😖",
      "😗",
      "😘",
      "😙",
      "😚",
      "😛",
      "😜",
      "😝",
      "😞",
      "😟",
      "😠",
      "😡",
      "😢",
      "😣",
      "😤",
      "😥",
      "😦",
      "😧",
      "😨",
      "😩",
      "😪",
      "😫",
      "😬",
      "😭",
      "😮",
      "😯",
      "😰",
      "😱",
      "😲",
      "😳",
      "😴",
      "😵",
      "😶",
      "😷",
      "😸",
      "😹",
      "😺",
      "😻",
      "😼",
      "😽",
      "😾",
      "😿",
      "🙀",
      "👣",
      "👤",
      "👥",
      "👶",
      "👶🏻",
      "👶🏼",
      "👶🏽",
      "👶🏾",
      "👶🏿",
      "👦",
      "👦🏻",
      "👦🏼",
      "👦🏽",
      "👦🏾",
      "👦🏿",
      "👧",
      "👧🏻",
      "👧🏼",
      "👧🏽",
      "👧🏾",
      "👧🏿",
      "👨",
      "👨🏻",
      "👨🏼",
      "👨🏽",
      "👨🏾",
      "👨🏿",
      "👩",
      "👩🏻",
      "👩🏼",
      "👩🏽",
      "👩🏾",
      "👩🏿",
      "👪",
      "👨‍👩‍👧",
      "👨‍👩‍👧‍👦",
      "👨‍👩‍👦‍👦",
      "👨‍👩‍👧‍👧",
      "👩‍👩‍👦",
      "👩‍👩‍👧",
      "👩‍👩‍👧‍👦",
      "👩‍👩‍👦‍👦",
      "👩‍👩‍👧‍👧",
      "👨‍👨‍👦",
      "👨‍👨‍👧",
      "👨‍👨‍👧‍👦",
      "👨‍👨‍👦‍👦",
      "👨‍👨‍👧‍👧",
      "👫",
      "👬",
      "👭",
      "👯",
      "👰",
      "👰🏻",
      "👰🏼",
      "👰🏽",
      "👰🏾",
      "👰🏿",
      "👱",
      "👱🏻",
      "👱🏼",
      "👱🏽",
      "👱🏾",
      "👱🏿",
      "👲",
      "👲🏻",
      "👲🏼",
      "👲🏽",
      "👲🏾",
      "👲🏿",
      "👳",
      "👳🏻",
      "👳🏼",
      "👳🏽",
      "👳🏾",
      "👳🏿",
      "👴",
      "👴🏻",
      "👴🏼",
      "👴🏽",
      "👴🏾",
      "👴🏿",
      "👵",
      "👵🏻",
      "👵🏼",
      "👵🏽",
      "👵🏾",
      "👵🏿",
      "👮",
      "👮🏻",
      "👮🏼",
      "👮🏽",
      "👮🏾",
      "👮🏿",
      "👷",
      "👷🏻",
      "👷🏼",
      "👷🏽",
      "👷🏾",
      "👷🏿",
      "👸",
      "👸🏻",
      "👸🏼",
      "👸🏽",
      "👸🏾",
      "👸🏿",
      "💂",
      "💂🏻",
      "💂🏼",
      "💂🏽",
      "💂🏾",
      "💂🏿",
      "👼",
      "👼🏻",
      "👼🏼",
      "👼🏽",
      "👼🏾",
      "👼🏿",
      "🎅",
      "🎅🏻",
      "🎅🏼",
      "🎅🏽",
      "🎅🏾",
      "🎅🏿",
      "👻",
      "👹",
      "👺",
      "💩",
      "💀",
      "👽",
      "👾",
      "🙇",
      "🙇🏻",
      "🙇🏼",
      "🙇🏽",
      "🙇🏾",
      "🙇🏿",
      "💁",
      "💁🏻",
      "💁🏼",
      "💁🏽",
      "💁🏾",
      "💁🏿",
      "🙅",
      "🙅🏻",
      "🙅🏼",
      "🙅🏽",
      "🙅🏾",
      "🙅🏿",
      "🙆",
      "🙆🏻",
      "🙆🏼",
      "🙆🏽",
      "🙆🏾",
      "🙆🏿",
      "🙋",
      "🙋🏻",
      "🙋🏼",
      "🙋🏽",
      "🙋🏾",
      "🙋🏿",
      "🙎",
      "🙎🏻",
      "🙎🏼",
      "🙎🏽",
      "🙎🏾",
      "🙎🏿",
      "🙍",
      "🙍🏻",
      "🙍🏼",
      "🙍🏽",
      "🙍🏾",
      "🙍🏿",
      "💆",
      "💆🏻",
      "💆🏼",
      "💆🏽",
      "💆🏾",
      "💆🏿",
      "💇",
      "💇🏻",
      "💇🏼",
      "💇🏽",
      "💇🏾",
      "💇🏿",
      "💑",
      "👩‍❤️‍👩",
      "👨‍❤️‍👨",
      "💏",
      "👩‍❤️‍💋‍👩",
      "👨‍❤️‍💋‍👨",
      "🙌",
      "🙌🏻",
      "🙌🏼",
      "🙌🏽",
      "🙌🏾",
      "🙌🏿",
      "👏",
      "👏🏻",
      "👏🏼",
      "👏🏽",
      "👏🏾",
      "👏🏿",
      "👂",
      "👂🏻",
      "👂🏼",
      "👂🏽",
      "👂🏾",
      "👂🏿",
      "👀",
      "👃",
      "👃🏻",
      "👃🏼",
      "👃🏽",
      "👃🏾",
      "👃🏿",
      "👄",
      "💋",
      "👅",
      "💅",
      "💅🏻",
      "💅🏼",
      "💅🏽",
      "💅🏾",
      "💅🏿",
      "👋",
      "👋🏻",
      "👋🏼",
      "👋🏽",
      "👋🏾",
      "👋🏿",
      "👍",
      "👍🏻",
      "👍🏼",
      "👍🏽",
      "👍🏾",
      "👍🏿",
      "👎",
      "👎🏻",
      "👎🏼",
      "👎🏽",
      "👎🏾",
      "👎🏿",
      "☝",
      "☝🏻",
      "☝🏼",
      "☝🏽",
      "☝🏾",
      "☝🏿",
      "👆",
      "👆🏻",
      "👆🏼",
      "👆🏽",
      "👆🏾",
      "👆🏿",
      "👇",
      "👇🏻",
      "👇🏼",
      "👇🏽",
      "👇🏾",
      "👇🏿",
      "👈",
      "👈🏻",
      "👈🏼",
      "👈🏽",
      "👈🏾",
      "👈🏿",
      "👉",
      "👉🏻",
      "👉🏼",
      "👉🏽",
      "👉🏾",
      "👉🏿",
      "👌",
      "👌🏻",
      "👌🏼",
      "👌🏽",
      "👌🏾",
      "👌🏿",
      "✌",
      "✌🏻",
      "✌🏼",
      "✌🏽",
      "✌🏾",
      "✌🏿",
      "👊",
      "👊🏻",
      "👊🏼",
      "👊🏽",
      "👊🏾",
      "👊🏿",
      "✊",
      "✊🏻",
      "✊🏼",
      "✊🏽",
      "✊🏾",
      "✊🏿",
      "✋",
      "✋🏻",
      "✋🏼",
      "✋🏽",
      "✋🏾",
      "✋🏿",
      "💪",
      "💪🏻",
      "💪🏼",
      "💪🏽",
      "💪🏾",
      "💪🏿",
      "👐",
      "👐🏻",
      "👐🏼",
      "👐🏽",
      "👐🏾",
      "👐🏿",
      "🙏",
      "🙏🏻",
      "🙏🏼",
      "🙏🏽",
      "🙏🏾",
      "🙏🏿",
      "🌱",
      "🌲",
      "🌳",
      "🌴",
      "🌵",
      "🌷",
      "🌸",
      "🌹",
      "🌺",
      "🌻",
      "🌼",
      "💐",
      "🌾",
      "🌿",
      "🍀",
      "🍁",
      "🍂",
      "🍃",
      "🍄",
      "🌰",
      "🐀",
      "🐁",
      "🐭",
      "🐹",
      "🐂",
      "🐃",
      "🐄",
      "🐮",
      "🐅",
      "🐆",
      "🐯",
      "🐇",
      "🐰",
      "🐈",
      "🐱",
      "🐎",
      "🐴",
      "🐏",
      "🐑",
      "🐐",
      "🐓",
      "🐔",
      "🐤",
      "🐣",
      "🐥",
      "🐦",
      "🐧",
      "🐘",
      "🐪",
      "🐫",
      "🐗",
      "🐖",
      "🐷",
      "🐽",
      "🐕",
      "🐩",
      "🐶",
      "🐺",
      "🐻",
      "🐨",
      "🐼",
      "🐵",
      "🙈",
      "🙉",
      "🙊",
      "🐒",
      "🐉",
      "🐲",
      "🐊",
      "🐍",
      "🐢",
      "🐸",
      "🐋",
      "🐳",
      "🐬",
      "🐙",
      "🐟",
      "🐠",
      "🐡",
      "🐚",
      "🐌",
      "🐛",
      "🐜",
      "🐝",
      "🐞",
      "🐾",
      "⚡️",
      "🔥",
      "🌙",
      "☀️",
      "⛅️",
      "☁️",
      "💧",
      "💦",
      "☔️",
      "💨",
      "❄️",
      "🌟",
      "⭐️",
      "🌠",
      "🌄",
      "🌅",
      "🌈",
      "🌊",
      "🌋",
      "🌌",
      "🗻",
      "🗾",
      "🌐",
      "🌍",
      "🌎",
      "🌏",
      "🌑",
      "🌒",
      "🌓",
      "🌔",
      "🌕",
      "🌖",
      "🌗",
      "🌘",
      "🌚",
      "🌝",
      "🌛",
      "🌜",
      "🌞",
      "🍅",
      "🍆",
      "🌽",
      "🍠",
      "🍇",
      "🍈",
      "🍉",
      "🍊",
      "🍋",
      "🍌",
      "🍍",
      "🍎",
      "🍏",
      "🍐",
      "🍑",
      "🍒",
      "🍓",
      "🍔",
      "🍕",
      "🍖",
      "🍗",
      "🍘",
      "🍙",
      "🍚",
      "🍛",
      "🍜",
      "🍝",
      "🍞",
      "🍟",
      "🍡",
      "🍢",
      "🍣",
      "🍤",
      "🍥",
      "🍦",
      "🍧",
      "🍨",
      "🍩",
      "🍪",
      "🍫",
      "🍬",
      "🍭",
      "🍮",
      "🍯",
      "🍰",
      "🍱",
      "🍲",
      "🍳",
      "🍴",
      "🍵",
      "☕️",
      "🍶",
      "🍷",
      "🍸",
      "🍹",
      "🍺",
      "🍻",
      "🍼",
      "🎀",
      "🎁",
      "🎂",
      "🎃",
      "🎄",
      "🎋",
      "🎍",
      "🎑",
      "🎆",
      "🎇",
      "🎉",
      "🎊",
      "🎈",
      "💫",
      "✨",
      "💥",
      "🎓",
      "👑",
      "🎎",
      "🎏",
      "🎐",
      "🎌",
      "🏮",
      "💍",
      "❤️",
      "💔",
      "💌",
      "💕",
      "💞",
      "💓",
      "💗",
      "💖",
      "💘",
      "💝",
      "💟",
      "💜",
      "💛",
      "💚",
      "💙",
      "🏃",
      "🏃🏻",
      "🏃🏼",
      "🏃🏽",
      "🏃🏾",
      "🏃🏿",
      "🚶",
      "🚶🏻",
      "🚶🏼",
      "🚶🏽",
      "🚶🏾",
      "🚶🏿",
      "💃",
      "💃🏻",
      "💃🏼",
      "💃🏽",
      "💃🏾",
      "💃🏿",
      "🚣",
      "🚣🏻",
      "🚣🏼",
      "🚣🏽",
      "🚣🏾",
      "🚣🏿",
      "🏊",
      "🏊🏻",
      "🏊🏼",
      "🏊🏽",
      "🏊🏾",
      "🏊🏿",
      "🏄",
      "🏄🏻",
      "🏄🏼",
      "🏄🏽",
      "🏄🏾",
      "🏄🏿",
      "🛀",
      "🛀🏻",
      "🛀🏼",
      "🛀🏽",
      "🛀🏾",
      "🛀🏿",
      "🏂",
      "🎿",
      "⛄️",
      "🚴",
      "🚴🏻",
      "🚴🏼",
      "🚴🏽",
      "🚴🏾",
      "🚴🏿",
      "🚵",
      "🚵🏻",
      "🚵🏼",
      "🚵🏽",
      "🚵🏾",
      "🚵🏿",
      "🏇",
      "🏇🏻",
      "🏇🏼",
      "🏇🏽",
      "🏇🏾",
      "🏇🏿",
      "⛺️",
      "🎣",
      "⚽️",
      "🏀",
      "🏈",
      "⚾️",
      "🎾",
      "🏉",
      "⛳️",
      "🏆",
      "🎽",
      "🏁",
      "🎹",
      "🎸",
      "🎻",
      "🎷",
      "🎺",
      "🎵",
      "🎶",
      "🎼",
      "🎧",
      "🎤",
      "🎭",
      "🎫",
      "🎩",
      "🎪",
      "🎬",
      "🎨",
      "🎯",
      "🎱",
      "🎳",
      "🎰",
      "🎲",
      "🎮",
      "🎴",
      "🃏",
      "🀄️",
      "🎠",
      "🎡",
      "🎢",
      "🚃",
      "🚞",
      "🚂",
      "🚋",
      "🚝",
      "🚄",
      "🚅",
      "🚆",
      "🚇",
      "🚈",
      "🚉",
      "🚊",
      "🚌",
      "🚍",
      "🚎",
      "🚐",
      "🚑",
      "🚒",
      "🚓",
      "🚔",
      "🚨",
      "🚕",
      "🚖",
      "🚗",
      "🚘",
      "🚙",
      "🚚",
      "🚛",
      "🚜",
      "🚲",
      "🚏",
      "⛽️",
      "🚧",
      "🚦",
      "🚥",
      "🚀",
      "🚁",
      "✈️",
      "💺",
      "⚓️",
      "🚢",
      "🚤",
      "⛵️",
      "🚡",
      "🚠",
      "🚟",
      "🛂",
      "🛃",
      "🛄",
      "🛅",
      "💴",
      "💶",
      "💷",
      "💵",
      "🗽",
      "🗿",
      "🌁",
      "🗼",
      "⛲️",
      "🏰",
      "🏯",
      "🌇",
      "🌆",
      "🌃",
      "🌉",
      "🏠",
      "🏡",
      "🏢",
      "🏬",
      "🏭",
      "🏣",
      "🏤",
      "🏥",
      "🏦",
      "🏨",
      "🏩",
      "💒",
      "⛪️",
      "🏪",
      "🏫",
      "💻",
      "⏰",
      "⏳",
      "⌛️",
      "📷",
      "📹",
      "🎥",
      "📺",
      "📻",
      "📟",
      "📞",
      "☎️",
      "📠",
      "💽",
      "💾",
      "💿",
      "📀",
      "📼",
      "🔋",
      "🔌",
      "💡",
      "🔦",
      "📡",
      "💳",
      "💸",
      "💰",
      "💎",
      "🌂",
      "👝",
      "👛",
      "👜",
      "💼",
      "🎒",
      "💄",
      "👓",
      "👒",
      "👡",
      "👠",
      "👢",
      "👞",
      "👟",
      "👙",
      "👗",
      "👘",
      "👚",
      "👕",
      "👔",
      "👖",
      "🚪",
      "🚿",
      "🛁",
      "🚽",
      "💈",
      "💉",
      "💊",
      "🔬",
      "🔭",
      "🔮",
      "🔧",
      "🔪",
      "🔩",
      "🔨",
      "💣",
      "🚬",
      "🔫",
      "🔖",
      "📰",
      "🔑",
      "✉️",
      "📩",
      "📨",
      "📧",
      "📥",
      "📤",
      "📦",
      "📯",
      "📮",
      "📪",
      "📫",
      "📬",
      "📭",
      "📄",
      "📃",
      "📑",
      "📈",
      "📉",
      "📊",
      "📅",
      "📆",
      "🔅",
      "🔆",
      "📜",
      "📋",
      "📖",
      "📓",
      "📔",
      "📒",
      "📕",
      "📗",
      "📘",
      "📙",
      "📚",
      "📇",
      "🔗",
      "📎",
      "📌",
      "✂️",
      "📐",
      "📍",
      "📏",
      "🚩",
      "📁",
      "📂",
      "✒️",
      "✏️",
      "📝",
    ];
      //no two emojis should have the index difference less than 5
        var emojiList: string[] = [];
        var emojiListIndex: number[] = [];
      //generate 8 emojis
      while(emojiList.length < 16) {
        var found: boolean = false;
        var index = Math.floor(Math.random() * allEmojis.length)
        for(var j = 0; j < emojiListIndex.length; j++) {
            if(Math.abs(index - emojiListIndex[j]) < 8) {
                found = true;
                break;
            }
        }
        var emoji = allEmojis[index];
        if (!found && emojiList.indexOf(emoji) === -1) {
            emojiList.push(emoji);
            emojiList.push(emoji);
        }
    }
    // shuffle emojiList
    
    function shuffleArray(array: string[]) {
        for (var i = array.length - 1; i > 0; i--) {
        
            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
            
        return array;
     }
     // shuffle emojiList
    for(var i = 0; i < 16; i++) {
        emojiList = shuffleArray(emojiList);
    }
    //console.log(emojiList);
    return emojiList;
}

type Card = {
    id: number,
    emoji: string,
    flipped: boolean,
    matched: boolean,
}

const Card = (props:Card) => {
    return (
        <View
            style={{
                width: 75,
                height: 100,
                backgroundColor: props.flipped || props.matched ? '#BADEF8' : '#F8BADA',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#000',
            }}
            
        >
            <Text 
                fontSize={40}
            >{props.flipped || props.matched ? props.emoji : props.id}</Text>
        </View>
    )
}


export default function MemoryGame({ navigation }: MemoryGameProps) {
     /*
        Make a grid of 4x4 cards with 8 pairs of cards (16 cards total)
        Each pair should have a unique emoji on it
        When a card is clicked, it should flip over and show the emoji
        When two cards are flipped over, if they match, they should stay flipped over
        If they don't match, they should flip back over
        When all cards are flipped over, the game should end
    */

    
    
    const [cards, setCards] = useState<Card[]>([]);
    const [timer , setTimer] = useState(20);
    const toast = useToast();
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [interval, si]= useState<NodeJS.Timeout>();

    const onCardPress = (id: number) => {
        
        if(timer == 0) {    
                const newCards = cards.map((card) => {
                    if (card.id === id && !card.matched) {
                        return {...card, flipped: !card.flipped}
                    }
                    return card;
                });
                setCards(newCards);
        }
        
        
    }

    useEffect(() => {
        const emojis =  generateEmojiList();
        const cards: Card[] = [];
        for (let i = 0; i < 16; i++) {
            cards.push({
                id: i,
                emoji: emojis[i],
                flipped: true,
                matched: false,
            })
        }
        setCards(cards);
        //start a timer
        si(setInterval(() => {
            setTimer((timer) => timer - 1);
        }
        , 1000));

    }, []);

    useEffect(() => {
        if(timer == 0) {
            const tempCards = cards 
            for (let i = 0; i < 16; i++) {
                tempCards[i].flipped = false;
            }
            setCards(tempCards);
        }
        if (timer < 0 ) {
            //stop the timer
            setTimer(0);
            clearInterval(interval);

        }
    }, [timer])

    useEffect(() => {
       var totalFlipped = 0;
       if(cards.length === 16) {
        for (let i = 0; i < 16; i++) {
            if(cards[i].flipped) {
                totalFlipped++;
            }
            //remove the matched cards
            
        }
        

        if(totalFlipped == 2){
                var firstFlipped = -1;
                var secondFlipped = -1;
                for (let i = 0; i < 16; i++) {
                    if(cards[i].flipped) {
                        if(firstFlipped == -1) {
                            firstFlipped = i;
                        } else {
                            secondFlipped = i;
                        }
                    }
                }
                if(cards[firstFlipped].emoji == cards[secondFlipped].emoji) {
                    setCorrect(correct + 1);
                    const tempCards = cards;
                    tempCards[firstFlipped].matched = true;
                    tempCards[secondFlipped].matched = true;
                    tempCards[firstFlipped].flipped = false;
                    tempCards[secondFlipped].flipped = false;

                    setCards(tempCards);
                } else {
                    setIncorrect(incorrect + 1);
                    const tempCards = cards;
                    tempCards[firstFlipped].flipped = false;
                    tempCards[secondFlipped].flipped = false;
                    setCards(tempCards);
                }
            }
         }
    }, [cards])
    useEffect(() => {
      if(correct == 8) {
            toast.show({
                render: ({
                id
                }) => {
                return <ToastAlert
                title={"Result"}
                description={"Your total score is " + (correct - incorrect)}
                status={"success"}
                id={"login"}
                variant={"solid"}
                isClosable={false}
            />;
            }
        })
          navigation.navigate('GoodJob')

      }
    }, [correct])
    
    
  return (
    <View style={styles.container}>
      <Background blobs={blobs} showLogo={showLogo} blobColors={blobColors} />
      <VStack mt={125} width={"100%"} p={5} flex={1}>
        <HStack alignItems={"center"}>
          {/* Back Button */}

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowBackIcon size={6} color={"brand.500"} mr={3} />
          </TouchableOpacity>
          <Text
            fontSize={45}
            fontWeight={"bold"}
            fontFamily={"Butler-ExtraBold"}
            color={"brand.500"}
            mb={3}
          >
            Memory Game
          </Text>
        </HStack>

        <Divider background={"#00000050"} />

        <VStack flex={1} mt={5} justifyContent="flex-start">
          {timer != 0 ? (
            <VStack
                w="100%"
                alignItems={"center"}
            >
                <Text fontSize={20} fontWeight={"bold"} fontFamily={"Gilroy-Bold"} >
                    Cards will flip in 
                </Text>
                <Text fontSize={40} fontWeight={"bold"} fontFamily={"Gilroy-ExtraBold"} color={"brand.500"} mb={3}>
                 
                    {timer}
                </Text>

            </VStack>
          ) : (
            <HStack justifyContent="space-around" width={"100%"} p={5}>
              <VStack flex={1} alignItems="center" mr={5}>
                <Text
                  fontSize={17}
                  fontWeight={"bold"}
                  fontFamily={"Gilroy-Bold"}
                >
                  Correct Guesses
                </Text>
                <Text
                  fontSize={45}
                  fontWeight={"bold"}
                  fontFamily={"Gilroy-Bold"}
                  color={"green.800"}
                >
                  {correct}
                </Text>
              </VStack>
              <Divider
                orientation="vertical"
                background={"#00000090"}
                height={"100%"}
              />
              <VStack flex={1} alignItems="center" ml={5}>
                <Text
                  fontSize={17}
                  fontWeight={"bold"}
                  fontFamily={"Gilroy-Bold"}
                  textAlign="center"
                >
                  Incorrect Guesses
                </Text>
                <Text
                  fontSize={45}
                  fontWeight={"bold"}
                  fontFamily={"Gilroy-Bold"}
                  color={"red.800"}
                >
                  {incorrect}
                </Text>
              </VStack>
            </HStack>
          )}
          {/*
                        Make a grid of 4x4 cards with 8 pairs of cards (16 cards total)
                        Each pair should have a unique emoji on it
                        When a card is clicked, it should flip over and show the emoji
                        When two cards are flipped over, if they match, they should stay flipped over
                        If they don't match, they should flip back over
                        When all cards are flipped over, the game should end
                    */}
          <SimpleGrid
            columns={4}
            width={"100%"}
            p={5}
            flex={1}
            justifyContent="space-around"
            alignItems={"center"}
            space={5}
          >
            {cards.map((card) => {
              return (
                <TouchableOpacity
                    key={card.id}
                    onPress={() => onCardPress(card.id)}
                >
                    <Card
                    id={card.id}
                    emoji={card.emoji}
                    flipped={card.flipped}
                    matched={card.matched}
                    
                    />
                </TouchableOpacity>
                
              );
            })}
          </SimpleGrid>
        </VStack>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
  },
  
});
