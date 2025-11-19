import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  root: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  card: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardCenter: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // ocupa el espacio central
    justifyContent: "center",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNumber: {
    fontSize: 14,
    fontWeight: "500",

    color: "#000",
  },
  cardInfo: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: "#8E8E93",
    lineHeight: 20,
  },
  changeButton: {
    color: "#5B9EE1",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 8,
  },
  deliveryLogo: {
    width: 40,
    height: 25,
    resizeMode: "contain",
  },
  summarySection: {
    padding: 16,
    gap: 8,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryLabel: {
    fontSize: 14,
    color: "#8E8E93",
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  summaryTotal: {
    fontSize: 16,
    fontWeight: "700",
  },
  submitButton: {
    backgroundColor: "#5B9EE1",
    margin: 16,
    padding: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
export default styles;