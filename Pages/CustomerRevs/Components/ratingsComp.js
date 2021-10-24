import React,{ useState} from "react";

const [retailNme, setRetailNme] = React.useState();
const [complaintIn, setComplaintIn] = React.useState();

export const [defaultRating, setDefaultRating] = React.useState(3);
const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);

const starImgFilled =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
const starImgCorner =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

export const CustomRatingStars = () => {
    return (
        <View style={styles.customRatingBarStyle}>
            {maxRating.map((item, key) => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={item}
                        onPress={() => setDefaultRating(item)}
                    >
                        <Image
                            style={styles.starImgStyle}
                            source={
                                item <= defaultRating
                                    ? { uri: starImgFilled }
                                    : { uri: starImgCorner }
                            }
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const ratingFdback = defaultRating + "/" + maxRating.length;
