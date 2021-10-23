import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';


const colors = {
    orange: '#ffba5a',
    grey: '#a9a9a9'
};

export default function Rating(){

    const [ retailNme, setRetailNme ] = React.useState();
    const [ complaintIn, setComplaintIn ] = React.useState();

    const [ defaultRating, setDefaultRating ] = React.useState(2);
    const [ maxRating, setMaxRating ] = React.useState([1,2,3,4,5]);

    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
    const starImgCorner= 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return(
                            <TouchableOpacity
                                activeOpacity = {0.7}
                                key = {item}
                                onPress={() => setDefaultRating(item)}
                            >
                                <Image
                                    style = {styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                        ? {uri: starImgFilled}
                                        : {uri: starImgCorner}
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        );
    }
    
    const ratingFdback = defaultRating + '/' + maxRating.length;

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Customer Complaint Ratings</Text>
                <TextInput
                    onChangeText = {setRetailNme}
                    value={retailNme}
                    placeholder='Retail Name' 
                />
                <CustomRatingBar/>
                <Text>{ratingFdback}</Text>
                <TouchableOpacity
                    activeOpacity ={0.7}
                    style={styles.buttonStyle}
                    onPress={() => alert('Review Sent \nReview Info :- \nComplaint : ' + retailNme + '\nStars : ' + ratingFdback)}
                >
                    <Text>send</Text>
                    {
                        console.log('Stars : ' + defaultRating + '\nRetail' + retailNme)
                    }
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customRatingBarStyle:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starImgStyle:{
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 15,
        backgroundColor: 'red',
        borderRadius: 5
    }
})