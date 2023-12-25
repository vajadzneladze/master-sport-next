export const calculateSubtotal = cartItems => {
    const subtotal = cartItems.reduce(
        (total, item) =>
            total +
            (item.isSale && item.newPrice ? item.newPrice : item.price) *
                item.quantity,
        0,
    )

    return parseFloat(subtotal.toFixed(2))
}

export const calculateTax = (subtotal, taxRate) => {
    const withTax = subtotal * taxRate
    return parseFloat(withTax.toFixed(2))
}

export const calculateTotal = (
    subtotal,
    tax,
    shippingCost,
    promoCodeDiscount = 0,
) => {
    const discountedSubtotal = subtotal - promoCodeDiscount
    const total = discountedSubtotal + tax + shippingCost
    return parseFloat(total.toFixed(2))
}
