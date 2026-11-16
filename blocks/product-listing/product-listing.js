/**
 * Decorates the Product Listing block.
 *
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const message = document.createElement('p');

  message.className = 'product-listing-placeholder';
  message.textContent = 'Product Listing block loaded successfully!';

  block.replaceChildren(message);
}
