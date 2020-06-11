import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Alert,
	TextInput,
	SafeAreaView,
	Switch,
	Modal,
} from 'react-native'
import { data } from './src/data'
import { styles } from './src/styles'

const App = () => {
	const [value, setValue] = useState('')
	const [inputData, setInputData] = useState(data)
	const [isEnabled, setIsEnabled] = useState(false)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
	const [modalVisible, setModalVisible] = useState(false)

	//useEffect(() => {}, [inputData])

	const ModalWindow = () => {
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
					<Text>123</Text>
				</Modal>
			</View>
		)
	}

	const onPressHandler = (name, text, id, booked) => {
		setModalVisible(!modalVisible)
	}

	const Item = ({ name, text, id, booked }) => {
		return (
			<TouchableOpacity
				style={styles.item}
				// onPress={() => console.log(text)}
				//onPress={() => Alert.alert(text, id)}
				onPress={() => {
					onPressHandler(name, text, id, booked)
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
