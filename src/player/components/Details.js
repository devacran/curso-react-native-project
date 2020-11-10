import React from 'react'
import {Container,Detail,Top,Bottom,Cover,Description, Title, Trailer} from './Details.styles'
import {ScrollView, StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview'

export const Details = (props) => {

    const makeHtml = () =>{
        return(`
        <style>
            .video {
                position: relative;
                padding-bottom: 56.25%

            }
            iframe {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
            }
        </style>
        <div class='video'>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/hhLAnc5NWxc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        `)
    }


    return (
        <Container>
            <Top><Title>{props.title}</Title></Top>
                <Bottom>
                 <Detail>
                    <Cover source={{uri: props.medium_cover_image}}/>
                 </Detail>
                <Description>{props.description_full}</Description>
                <Trailer>
                    <ScrollView>
                        <WebView style={styles.trailerVideo} source={{html: makeHtml()}}/>
                    </ScrollView>
                </Trailer>
            </Bottom>

        </Container>
    )
}

const styles = StyleSheet.create({
    trailerVideo: {
        width: 400,
        height:200,
    }
})

