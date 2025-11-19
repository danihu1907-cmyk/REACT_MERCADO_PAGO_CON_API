import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';

export default function MyOrdersScreen() {
  const [activeTab, setActiveTab] = useState('entregados');

  const orders = [
    {
      id: '1947034',
      date: '05-12-2019',
      product: 'Power Ade',
      quantity: 3,
      total: 112,
      status: 'Entregado'
    },
    {
      id: '1947034',
      date: '05-12-2019',
      product: 'Power Ade',
      quantity: 3,
      total: 112,
      status: 'Entregado'
    },
    {
      id: '1947034',
      date: '05-12-2019',
      product: 'Power Ade',
      quantity: 3,
      total: 112,
      status: 'Entregado'
    },
    {
      id: '1947034',
      date: '05-12-2019',
      product: 'Power Ade',
      quantity: 3,
      total: 112,
      status: 'Entregado'
    },
    {
      id: '1947034',
      date: '05-12-2019',
      product: 'Power Ade',
      quantity: 3,
      total: 112,
      status: 'Entregado'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Boton de regresar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
      </View>

      {/* Titulo */}
      <Text style={styles.title}>Mis compras</Text>

      {/* Botones de estado */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'entregados' && styles.activeTab]}
          onPress={() => setActiveTab('entregados')}
        >
          <Text style={[styles.tabText, activeTab === 'entregados' && styles.activeTabText]}>
            Entregados
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'cancelado' && styles.activeTab]}
          onPress={() => setActiveTab('cancelado')}
        >
          <Text style={[styles.tabText, activeTab === 'cancelado' && styles.activeTabText]}>
            Cancelados
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista de productos */}
      <ScrollView style={styles.ordersList} showsVerticalScrollIndicator={false}>
        {orders.map((order, index) => (
          <View key={index} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderId}>Orden No{order.id}</Text>
              <Text style={styles.orderDate}>{order.date}</Text>
            </View>

            <View style={styles.orderInfo}>
              <View style={styles.orderRow}>
                <Text style={styles.label}>Productos:</Text>
                <Text style={styles.value}>{order.product}</Text>
              </View>
              <View style={styles.orderRow}>
                <Text style={styles.label}>Cantidad:</Text>
                <Text style={styles.value}>{order.quantity}</Text>
                <Text style={styles.totalLabel}>Monto total:</Text>
                <Text style={styles.totalAmount}>${order.total}</Text>
              </View>
            </View>

            <View style={styles.orderFooter}>
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>Detalles</Text>
              </TouchableOpacity>
              
              <Text style={styles.statusText}>{order.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
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
  searchButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  searchIcon: {
    fontSize: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFF',
  },
  ordersList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  orderCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  orderDate: {
    fontSize: 13,
    color: '#BBBBBB',
  },
  orderInfo: {
    marginBottom: 16,
  },
  orderRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#BBBBBB',
    marginRight: 8,
  },
  value: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
    flex: 1,
  },
  totalLabel: {
    fontSize: 14,
    color: '#BBBBBB',
    marginLeft: 20,
    marginRight: 8,
  },
  totalAmount: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsButton: {
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  detailsButtonText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  statusText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
});