"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";

interface OrderItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  _id: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: OrderItem[];
  total: number;
  status: string;
}

function OrderConfirmationContent() {
  const [order, setOrder] = useState<Order | null>(null);
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (orderId) {
      fetch(`/api/orders/${orderId}`)
        .then((res) => res.json())
        .then((data) => setOrder(data))
        .catch((error) => console.error("Error fetching order:", error));
    }
  }, [orderId]);

  const calculateTotal = (items: OrderItem[]) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleDownloadReceipt = () => {
    if (!order) return;

    const receiptContent = `
      Order ID: ${order._id}
      Name: ${order.customerName}
      Phone: ${order.customerPhone}
      Address: ${order.customerAddress}
      Total: $${order.total.toFixed(2)}
      Items:
      ${order.items
        .map(
          (item) =>
            `${item.name} - Quantity: ${item.quantity} - $${(
              item.price * item.quantity
            ).toFixed(2)}`
        )
        .join("\n")}
    `;

    const blob = new Blob([receiptContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `receipt_${order._id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Order Confirmation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl mb-4">Thank you for your order!</p>
          <p className="mb-2">
            <strong>Order ID:</strong> {order._id}
          </p>
          <p className="mb-2">
            <strong>Name:</strong> {order.customerName}
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> {order.customerPhone}
          </p>
          <p className="mb-2">
            <strong>Address:</strong> {order.customerAddress}
          </p>
          <p className="mb-2">
            <strong>Total:</strong> ${calculateTotal(order.items).toFixed(2)}
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Order Items:</h2>
          <ul>
            {order.items.map((item) => (
              <li key={item._id} className="mb-2">
                {item.name} - Quantity: {item.quantity} - $
                {(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <button
            onClick={handleDownloadReceipt}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download Receipt
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

export default function OrderConfirmation() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
