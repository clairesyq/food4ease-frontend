import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    opacity: 0.91,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  topic: {
    height: 50,
    color: "#797979",
    opacity: 0.93,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 30
  },
  inputView: {
    width: "80%",
    backgroundColor: "#FFFEE8",
    borderColor: '#F08519',
    borderWidth: 1.5,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.2
  },
  inputText: {
    height: 50,
    color: "#797979",
    opacity: 0.93,
    fontSize: 14,
    fontWeight: "600"
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#F08519",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.2
  },
  signupBtn: {
    width: "80%",
    backgroundColor: "#F08519",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.2
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  row: {
    flexDirection: 'row',
    color: "#A7A7A7",
    fontSize: 14,
    fontWeight: "600"
  },
  link: {
    color: "#F08519",
    fontWeight: "600",
  },
  back: {
    position: 'absolute',
    top: 60,
    right: 137,
    color: "#F08519",
    fontSize: 16,
    fontWeight: "600"
  },
  error: {
    height: 70,
    color: "#dc143c",
    opacity: 0.93,
    fontSize: 14,
    fontWeight: "500"
  },
});