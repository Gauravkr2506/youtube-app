import React from "react";
import { BackHandler, InteractionManager, ActivityIndicator, FlatList, Animated, Easing } from "react-native";

import { Container, Content, StyleProvider, Root, Header, Title, Button, Left, Body, Text, Icon, Card, CardItem, Row, Col, View, Grid } from "native-base";
import { connect } from "react-redux";
import { LoadData } from "./../actions/action-main";
import MyListItem from "./../components/video-list/video-list";
import YouTube from "react-native-youtube";

class Video extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.props.selected_video == null ? null : (
					<YouTube
						apiKey="AIzaSyCqj7r3it_3IMNzhzsZA5AHUG36javzwsI"
						fullscreen={true}
						videoId={this.props.selected_video} // The YouTube video ID
						play={true} // control playback of video with true/false
						fullscreen={true} // control whether the video should play in fullscreen or inline
						loop={true} // control whether the video should loop when ended
						onReady={e => this.setState({ isReady: true })}
						onChangeState={e => this.setState({ status: e.state })}
						onChangeQuality={e => this.setState({ quality: e.quality })}
						onError={e => this.setState({ error: e.error })}
						style={{ alignSelf: "stretch", height: 300 }}
					/>
				)}
				<View style={{ padding: 15 }}>
					<View style={{ borderBottomWidth: 0.5, borderBottomColor: "#ebebeb", marginBottom: 10 }}>
						<Text style={{ fontWeight: "bold", fontSize: 14 }}>{this.props.navigation.state.params.title}</Text>
						<View style={{ height: 3, backgroundColor: "red", width: 150, marginTop: 8 }} />
					</View>
					<Text style={{ fontSize: 13, color: "#666" }}>{this.props.navigation.state.params.description}</Text>
				</View>
			</View>
		);
	}
}
const mapStateToProps = state => {
	return {
		selected_video: state.main_store.selected_video
	};
};

export default connect(mapStateToProps)(Video);
