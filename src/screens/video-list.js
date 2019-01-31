import React from "react";
import { BackHandler, InteractionManager, ActivityIndicator, FlatList, Animated, Easing } from "react-native";

import { Container, Content, StyleProvider, Root, Header, Title, Button, Left, Body, Text, Icon, Card, CardItem, Row, Col, View, Grid } from "native-base";
import { connect } from "react-redux";
import { LoadData } from "./../actions/action-main";
import MyListItem from "./../components/video-list/video-list";

class VideoList extends React.Component {
	constructor(props) {
		super(props);
		this.getData = this.getData.bind(this);
	}

	getData() {
		if (Object.keys(this.props.selected_tutorial).length > 0) {
			return this.props.selected_tutorial.video;
		} else {
			return [];
		}
	}
	_renderItem = ({ item }) => <MyListItem data={item} navigation={this.props.navigation} />;
	render() {
		return (
			<Content padder>
				<FlatList data={this.getData()} renderItem={this._renderItem} />
			</Content>
		);
	}
}
const mapStateToProps = state => {
	return {
		selected_tutorial: state.main_store.selected_tutorial
	};
};

export default connect(mapStateToProps)(VideoList);
