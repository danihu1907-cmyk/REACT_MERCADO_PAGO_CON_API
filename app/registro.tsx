import { router, useRouter } from "expo-router";
import React, {useState } from 'react';
import { 
    Text,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    TextInput,
    StyleSheet,
    Platform
 } from "react-native";

export default function RegisterScreen() {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    const handleGoogleLogin = () => {
        console.log('Google register');
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    { /* Botón de regreso */}
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backIcon}>‹</Text>
                    </TouchableOpacity>

                    { /* Titulo */ }
                    <View style={styles.header}> 
                        <Text style={styles.title}>Crear cuenta</Text>
                        <Text style={styles.subtitle}>
                            ¡Vamos a crear una cuenta juntos!
                        </Text>
                    </View>

                    { /* Input de Name */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nombre completo</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Nombre completo"
                            placeholderTextColor="#999"
                            autoCapitalize="none"  
                        />
                    </View>

                    { /* Input de Email */}
                    <View style={styles.inputContainer}>
                        <Text>Correo electrónico</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Correo electrónico"
                            placeholderTextColor="#999"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    { /* Input de contraseña */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Contraseña</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                value={password}
                                onChangeText={setPassword}
                                placeholder="••••••••"
                                placeholderTextColor="#999"
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeIcon}
                            >
                                <Text style={styles.eyeIconText}>
                                    {showPassword ? '👁' : '👁‍🗨'}
                                </Text>

                            </TouchableOpacity>

                        </View>

                    </View>
                    {/* Boton de registro */}
                    <TouchableOpacity
                        style={styles.registerButton}
                    >
                        <Text style={styles.registerButtonText}>Registrarse</Text>
                    </TouchableOpacity>

                    {/* Boton de Google */}
                    <TouchableOpacity
                        style={styles.googleButton}
                        onPress={handleGoogleLogin}
                    >
                        <Text style={styles.googleIcon}>G</Text>
                        <Text style={styles.googleButtonText}>
                            Inicia sesión con Google
                        </Text>
                    </TouchableOpacity>

                    {/* ---------------------- LINK PARA IR A LA PANTALLA DE LOGIN ---------------------- */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>¿Ya tienes una cuenta?</Text> 
                        <TouchableOpacity>
                            <Text style={styles.loginText}>Inicia sesión</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginBottom: 20,
    },
    backIcon: {
        fontSize: 32,
        color: '#000',
    },
    header: {
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },
  passwordInput: {
    flex: 1,
    padding: 16,
    fontSize: 15,
    color: '#000',
  },
  eyeIcon: {
    paddingHorizontal: 16,
  },
  eyeIconText: {
    fontSize: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    fontSize: 13,
    color: '#666',
  },
  registerButton: {
    backgroundColor: '#5B9FED',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  googleIcon: {
    fontSize: 20,
    marginRight: 12,
    fontWeight: '700',
  },
  googleButtonText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  loginText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
});