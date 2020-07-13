import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

import type MovieType from '@app/types/Movie';

interface PosterProps {
    movie: MovieType;
    borderRadius?: Animated.Value<number>;
    modalTopPadding?: number;
}

const Poster = ({borderRadius, movie, modalTopPadding}: PosterProps) => {
    const count = movie.reviews?.length || 0;
    const style = [styles.image, {borderRadius: borderRadius || 8}];
    return (
        <>
            <Animated.Image source={{uri: movie.poster}} style={style}/>
            <View style={[styles.content, {paddingTop: modalTopPadding || 20}]}>
                <Text style={styles.name}>{movie.name}</Text>
                <Text style={styles.reviews}>{`Reviews: ${count}`}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        paddingTop: 20,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        width: '100%',
    },
    name: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 2,
        flex: 1,
    },
    reviews: {
        color: 'white',
        fontSize: 18,
        textShadowColor: '#000',
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 2,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
});

export default Poster;
