import React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, View, Text, InteractionManager, Image } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { SelectVideo } from "../../actions/action-main";
class MyListItem extends React.PureComponent {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);
	}
	selectVideo(video_id, title, description) {
		InteractionManager.runAfterInteractions(() => this.props.SelectVideo(video_id));
		this.props.navigation.navigate("Video", { title: title, description: description });
	}
	render() {
		// let { key, video_id, title, description } = this.props.data;
		let { key, video_id, title, description, img } = this.props.data;

		return (
			<TouchableOpacity onPress={this.selectVideo.bind(this, video_id, title, description)}>
				<Card>
					<CardItem style={{ paddingHorizontal: 10 }}>
						<View style={{ flexDirection: "row" }}>
							<View style={{ width: 100, height: 100 }}>
								<Image source={img} style={{ width: 80, height: 80 }} />
							</View>
							<View style={{ flex: 1 }}>
								<Text style={{ color: "#000", fontWeight: "bold", marginBottom: 5 }}>{title}</Text>
							</View>
						</View>
					</CardItem>
				</Card>
			</TouchableOpacity>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		SelectVideo: key => dispatch(SelectVideo(key))
	};
};
export default connect(
	null,
	mapDispatchToProps
)(MyListItem);
