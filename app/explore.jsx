import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,TextInput, Modal, Button} from 'react-native';
import {  Container } from 'react-bootstrap';
import { ScrollView } from 'react-native-gesture-handler';

const explore = () => {
  const API_URL =  'http://localhost:3000/posts';
  const [postData, setPostData] = useState([]);
  const [formData, setFormData] = useState("");
  const [maxId ,setMaxId] = useState(null);

  useEffect(() => {
     fetch(API_URL)
      .then(response => response.json())
      .then(data => setPostData(data))
      .catch(error => console.error('Error fetching data:', error))
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{color: 'black', fontSize:20}}>{item.id} {item.title}</Text>
      {setMaxId(item.id)}
    </View>
  );

  const handleFormInsert = () => {
      const setData ={
        title: formData,
        id : maxId + 1
      };
      fetch(API_URL,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setData),
      })
      .then(response => response.json())
      .then(data => {console.log('post request successful',data);})
      .catch(error => {
        console.error('Error making post request'); 
      });
      location.reload();
  }

  const handleFormDelete = (id) => {
    fetch(API_URL + id ,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if(!response.ok){
        alert("Data Not Deleted\n Try Again");
      }  else{
        location.reload();
      }
    });
  };

  const UpdateData = (data) => {
    setShowModal(true);
    setEditUser(data);
    console.log(editUser);
}

  return (
   
    <ScrollView style={styles.container}>
      <View style = {{justifyContent: 'center', alignItems: 'center',marginTop: 50}}>
        <Text style={{fontSize: 18}}>Enter Car Name:</Text>
        <TextInput 
        style={styles.input}
        type="text" 
        placeholder="Honda" 
        onChangeText={text => setFormData(text)}
        value={formData}
        />
      <Button 
      variant="success" 
      type="submit"
      onClick={handleFormInsert}>
        Submit
      </Button>
      </View>
      <View>
      <Text style={{textAlign: 'center', fontSize:25, fontWeight:'bold', marginTop:15}}
      >Data Received by Api</Text>
      <FlatList
        data={postData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      </View>
      <Modal visible={showModal} transparent={true}>
          <UserModal setShowModal={setShowModal} items={editUser} />
      </Modal>
    </ScrollView>
  );
};

const UserModal = (props) =>{
  const [propsData,setPropsData] = useState(undefined);

  useEffect(()=> {
    if(props.items){
      setPropsData(props.items.title);
    }
  },[props.items])

  const handleUpdate= async()=>{
    const url = 'http://localhost:3000/posts/';
    const id= props.items.id;
    fetch(url+id,{
      method:"Put",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({"title": propsData})
    })
    .then(response=> {
      if(!response.ok){
        alert("Data Not updated\n Try Again");
      }  else{
        props.setShowModal(false);
        location.reload();
      }
  }
  )
  }

return(
  <View style={styles.modalContainer}>
    <View style={styles.modalView}>
        <Text style={styles.headings}>Updating List item</Text>  
          <Text>Item Name:</Text>
          <TextInput 
          style={styles.input}
          type='text'
          value={propsData}
          onChangeText={(text) => setPropsData(text)}
          />
          <Button title='Update' onPress={handleUpdate}  ></Button> <Text> </Text>
          <Button title='Close' onPress={()=>props.setShowModal(false)} ></Button>
    </View>
</View>
);
}

export default explore;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // flexDirection:'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
  },
  input:{
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    marginBottom: 10
  }
});