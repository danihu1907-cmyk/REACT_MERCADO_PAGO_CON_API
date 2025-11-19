import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Switch,
    Modal,
    ScrollView,
} from 'react-native';

export default function SettingScreen() {
    const [notifications, setNotifications] = useState({
        ventas: true,
        recienLlegados: false,
        cambiosEstado: false,
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = () => {
        console.log('Cambiar contraseña: ', { oldPassword, newPassword, confirmPassword });
        setModalVisible(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>

            {/* Boton back screen */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backIcon}>‹</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

                { /* Titulo */}
                <Text style={styles.title}>Configuración</Text>

                {/* Información personal */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Información personal</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Nombre completo</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Nombre completo'
                            placeholderTextColor="#999"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Fecha de cumpleaños</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="12/12/1989"
                            placeholderTextColor="#999"
                        />
                    </View>
                </View>

                {/* Contraseña */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Contraseña</Text>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Text style={styles.changeLink}>Cambiar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Contraseña</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='••••••••'
                            secureTextEntry
                            editable={false}
                            placeholderTextColor='#999'
                        />
                    </View>
                </View>

                {/* Notificaciones */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Notificaciones</Text>

                    <View style={styles.notificationItem}>
                        <Text style={styles.notificationLabel}>Ventas</Text>
                        <Switch
                            value={notifications.ventas}
                            onValueChange={(value) => setNotifications({...notifications, ventas: value})}
                            trackColor={{false: '#E0E0E0', true: '#4CAF50'}}
                            thumbColor="#FFF"
                        />
                    </View>

                    <View style={styles.notificationItem}>
                        <Text style={styles.notificationLabel}>Recien llegados</Text>
                        <Switch
                            value={notifications.recienLlegados}
                            onValueChange={(value) => setNotifications({...notifications, recienLlegados: value})}
                            trackColor={{false: '#E0E0E0', true: '#4CAF50'}}
                            thumbColor="#FFF"
                        />
                    </View>

                    <View style={styles.notificationItem}>
                        <Text style={styles.notificationLabel}>Cambios de estado de entrega</Text>
                        <Switch
                            value={notifications.cambiosEstado}
                            onValueChange={(value) => setNotifications({...notifications, cambiosEstado: value})}
                            trackColor={{false: '#E0E0E0', true: '#4CAF50'}}
                            thumbColor="#FFF"
                        />
                    </View>
                </View>
            </ScrollView>

            {/* Modal para cambiar la contraseña */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHandle}/>

                        <Text style={styles.modalTitle}>Cambiar contraseña</Text>

                        <View style={styles.modalInputContainer}>
                            <TextInput
                                style={styles.modalInput}
                                placeholder='Contraseña anterior'
                                placeholderTextColor="#999"
                                secureTextEntry
                                value={oldPassword}
                                onChangeText={setOldPassword}
                            />
                            <TouchableOpacity style={styles.forgotLink}>
                                <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalInputContainer}>
                            <TextInput
                                style={styles.modalInput}
                                placeholder='Nueva contraseña'
                                placeholderTextColor="#999"
                                secureTextEntry
                                value={newPassword}
                                onChangeText={setNewPassword}
                            />
                        </View>

                        <View style={styles.modalInputContainer}>
                            <TextInput
                                style={styles.modalInput}
                                placeholder='Confirmar nueva contraseña'
                                placeholderTextColor="#999"
                                secureTextEntry
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={handleChangePassword}
                        >
                            <Text style={styles.saveButtonText}>Guardar contraseña</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 10,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 32,
        color: '#000',
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
        marginBottom: 30,
    },
    section: {
        marginBottom: 32,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        marginBottom: 16,
    },
    changeLink: {
        fontSize: 14,
        color: '#999',
        fontWeight: '500',
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 13,
        color: '#999',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 16,
        fontSize: 15,
        color: '#000',
    },
    notificationItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    notificationLabel: {
        fontSize: 15,
        color: '#000',
    },
    // Estilos del Modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingBottom: 40,
    },
    modalHandle: {
        width: 40,
        height: 4,
        backgroundColor: '#D0D0D0',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 24,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginBottom: 24,
        textAlign: 'center',
    },
    modalInputContainer: {
        marginBottom: 20,
    },
    modalInput: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 16,
        fontSize: 15,
        color: '#000',
    },
    forgotLink: {
        alignSelf: 'flex-end',
        marginTop: 8,
    },
    forgotText: {
        fontSize: 13,
        color: '#999',
    },
    saveButton: {
        backgroundColor: '#5B9FED',
        borderRadius: 12,
        padding: 18,
        alignItems: 'center',
        marginTop: 12,
    },
    saveButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});