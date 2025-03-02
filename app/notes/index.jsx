import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import NotesList from '../../components/NoteList';
import AddNoteModal from '../../components/AddNoteModal';

const NoteScreen = () => {
    const [notes, setNotes] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        setLoading(true);
        const reponse = await noteService.getNotes();

        if(reponse.eror) {
            setError(reponse.eror);
            Alert.alert('Error: ' + reponse.eror);
        } else {
            setNotes(reponse.data);
            setError(null);
        }

        setLoading(false);

    };

    const addNote = () => {
        if (newNote.trim() === '') return;

        setNotes((prevNotes) => [
            ...prevNotes,
            { id: Date.now().toString(), title: newNote, content: '' }
        ]);

        setNewNote('');
        setModalVisible(false); // Modalı kapat
    }

    return (
        <View style={styles.container}>
            <NotesList notes={notes}/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.addButtonText}>Add Note</Text>
            </TouchableOpacity>
            <AddNoteModal
                visible={modalVisible}
                setModalVisible={setModalVisible}
                newNote={newNote}
                setNewNote={setNewNote}
                addNote={addNote}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-between',

    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default NoteScreen;