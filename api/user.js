import auth from '@react-native-firebase/auth'

export const createUser = async (fullName, email, password) => {
    try {
        const user = await auth().createUserWithEmailAndPassword(email,password);
        await user.user.updateProfile({displayName: fullName})
        console.log(user)
        return user
    }
    catch(error) {
        if(error.code === 'auth/email-already-in-use') {
            return { error:'That email address is already in use'}
        } else if (error.code === 'auth/invalid-email' ){
            return { error:'Please enter a vlaid email address'}
        }
        return { error:'Something went wrong'}
    }
}
export const loggingUser = async (email,password) => {
    try{
        const response = await auth().signInWithEmailAndPassword(email, password)
        const token = await response.user.getIdToken()
        return {
            status:true,
            data: {
                displayName: response.user.displayName,
                email: response.user.email,
                token
            }
        }
    } catch (error) {
        return { status: false, error: error.message}
    }
}