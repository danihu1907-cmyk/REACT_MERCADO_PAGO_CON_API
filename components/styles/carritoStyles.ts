import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  root: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    color: "#000",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 50,
    height: 70,
    resizeMode: "contain",
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 12,
    color: "#8E8E93",
    marginBottom: 12,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
  },
  quantityButtonText: {
    fontSize: 20,
    color: "#5B9EE1",
    fontWeight: "400",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 16,
    minWidth: 20,
    textAlign: "center",
  },
  rightSection: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 70,
  },
  menuButton: {
    padding: 4,
  },
  menuDots: {
    fontSize: 20,
    color: "#8E8E93",
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E5EA",
  },
  subtotalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  subtotalAmount: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F9F9F9",
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderTopColor: "#E5E5EA",
  },
  verifyButton: {
    backgroundColor: "#5B9EE1",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#5B9EE1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  verifyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  // 🔔 Estilos para el modal personalizado
  alertContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    alignItems: "center",
  },
  alertText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    fontWeight: "500",
  },
  alertButton: {
    marginTop: 16,
    backgroundColor: "#5B9EE1",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  alertButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;