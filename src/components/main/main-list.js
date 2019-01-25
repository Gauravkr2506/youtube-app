import React from "react";
import { connect } from "react-redux";
import { Image, TouchableOpacity, View, Text, InteractionManager } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { SelectTutorial } from "./../../actions/action-main";
class MyListItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	SelectTutorial(key) {
		InteractionManager.runAfterInteractions(() => this.props.SelectTutorial(key));
		this.props.navigation.navigate("VideoList");
	}
	render() {
		let { key, tutorial_name, description, img } = this.props.data;
		let url = "./../../../img/" + this.props.data.img + ".png";
		return (
			<TouchableOpacity onPress={this.SelectTutorial.bind(this, key)}>
				<Card>
					<CardItem style={{ paddingHorizontal: 10 }}>
						<View style={{ flexDirection: "row" }}>
							<View style={{ width: 100, height: 100 }}>
								{" "}
								<Image source={require(url)} style={{ width: 80, height: 80 }} />{" "}
							</View>
							<View style={{ flex: 1 }}>
								<Text style={{ color: "#000", fontWeight: "bold", marginBottom: 5 }}>{tutorial_name}</Text>
								<Text style={{ color: "#000", fontSize: 13 }}>{description}</Text>
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
		SelectTutorial: key => dispatch(SelectTutorial(key))
	};
};
export default connect(
	null,
	mapDispatchToProps
)(MyListItem);
