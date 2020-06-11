import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Alert,
	TextInput,
	SafeAreaView,
	Switch,
	Modal,
} from 'react-native'
import { data } from './src/data'

const App = () => {
	const [value, setValue] = useState('')
	const [inputData, setInputData] = useState(data)
	const [isEnabled, setIsEnabled] = useState(false)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
	const [modalVisible, setModalVisible] = useState(false)

	//useEffect(() => {}, [inputData])

	const ModalWindow = ({ name, text, id, booked }) => {
		return (
			<View style={styles.centeredView}>
				<Modal animationType="slide" transparent={false} visible={modalVisible}>
					<View style={styles.modalView}>
						<TextInput
							style={{ ...styles.input, width: '125%', marginLeft: 0 }}
						/>
						<TouchableOpacity
							style={styles.item}
							onPress={() => {
								setModalVisible(!modalVisible)
							}}
						>
							<Text>Close</Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		)
	}

	const onPressHandler = (text, id, booked) => {}

	const Item = ({ name, text, id, booked }) => {
		return (
			<TouchableOpacity
				style={styles.item}
				// onPress={() => console.log(text)}
				//onPress={() => Alert.alert(text, id)}
				onPress={() => {
					setModalVisible(!modalVisible)
				}}
				onLongPress={() => {
					removeItem(id)
				}}
				activeOpacity={0.3}
			>
				<Text style={styles.title}>{name}</Text>
				{/* {console.log(name)} */}
				<Text style={styles.title}>{booked.toString()}</Text>
			</TouchableOpacity>
		)
	}

	const addItem = () => {
		if (value.trim()) {
			const data = [
				...inputData,
				{
					id: Date.now().toString(),
					title: value,
					text: (value + ' ').repeat(5),
					booked: isEnabled,
				},
			]
			setInputData(data)
			setValue('')
		} else {
			Alert.alert('Ошибка ввода')
		}
	}

	const removeItem = (id) => {
		const data = inputData.filter((element) => element.id !== id)
		setInputData(data)
		//console.log(data)
	}

	const editItem = (id) => {}

	return (
		<SafeAreaView>
			<View style={styles.viewAddLine}>
				<TextInput
					style={styles.input}
					value={value}
					onChangeText={setValue}
					placeholder="Введите название ..."
					autoCorrect={false}
					autoCapitalize="none"
				/>
				<TouchableOpacity style={styles.btnAdd} onPress={addItem}>
					<Text style={styles.title}>ADD</Text>
				</TouchableOpacity>
				<Switch
					style={styles.switchBtn}
					onValueChange={toggleSwitch}
					value={isEnabled}
				/>
			</View>
			<ModalWindow />
			<View style={styles.container}>
				<FlatList
					data={inputData}
					renderItem={({ item }) => (
						<Item
							name={item.title}
							text={item.text}
							id={item.id}
							booked={item.booked}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</SafeAreaView>
	)
}

export default App

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		marginTop: 8,
		marginBottom: 80,
	},
	item: {
		backgroundColor: '#4D9DFF',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 26,
		color: 'white',
		textAlign: 'center',
	},
	input: {
		width: '50%',
		fontSize: 20,
		marginLeft: 16,
		borderWidth: 0.25,
		borderColor: 'black',
		borderRadius: 16,
		paddingHorizontal: 16,
	},
	btnAdd: {
		backgroundColor: '#3498DB',
		borderRadius: 16,
		padding: 13,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16,
	},
	viewAddLine: {
		flexDirection: 'row',
		marginTop: 20,
		justifyContent: 'space-between',
	},
	switchBtn: {
		marginRight: 20,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		//marginTop: 22,
		//backgroundColor: 'grey',
		width: '75%',
		height: '75%',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		padding: 35,
		alignItems: 'center',
	},
})
