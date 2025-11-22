import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
  },
  successIcon: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  receiptCard: {
    width: width - 40,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  receiptHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  receiptTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 16,
  },
  receiptRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    alignItems: "flex-start",
  },
  label: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    flex: 1,
    textAlign: "right",
  },
  valueHighlight: {
    fontSize: 18,
    color: "#4CAF50",
    fontWeight: "bold",
    flex: 1,
    textAlign: "right",
  },
  statusBadge: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "600",
  },
  idSection: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  idLabel: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  idValue: {
    fontSize: 12,
    color: "#666",
    fontFamily: "monospace",
  },
  actionsContainer: {
    width: width - 40,
  },
  homeButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    gap: 8,
    borderWidth: 2,
    borderColor: "#009EE3",
  },
  homeButtonText: {
    color: "#009EE3",
    fontSize: 16,
    fontWeight: "600",
  },
  noteContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    gap: 8,
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});

export default styles;
