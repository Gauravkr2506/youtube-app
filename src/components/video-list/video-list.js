import React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, View, Text, InteractionManager } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { SelectVideo } from "../../actions/action-main";
class MyListItem extends React.PureComponent {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);
	}
	selectVideo(video_id) {
		InteractionManager.runAfterInteractions(() => this.props.SelectVideo(video_id));
		this.props.navigation.navigate("Video");
	}
	render() {
		let { key, video_id, title, description } = this.props.data;

		return (
			<TouchableOpacity onPress={this.selectVideo.bind(this, video_id)}>
				<Card>
					<CardItem>
						<View>
							<Text style={{ color: "#000", fontWeight: "bold", marginBottom: 5 }}>{title}</Text>
							{/* <Text style={{ color: "#000", fontSize: 13 }}>{description}</Text> */}
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
