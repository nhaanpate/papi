// locket_response.js
const obj = JSON.parse($response.body);
obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

const premium = {
  "expires_date": "2099-12-31T23:59:59Z",
  "purchase_date": "2020-01-01T00:00:00Z",
  "original_purchase_date": "2020-01-01T00:00:00Z",
  "ownership_type": "PURCHASED"
};

obj.subscriber.subscriptions["locket.gold.yearly"] = premium;
obj.subscriber.entitlements["gold"] = {
  ...premium,
  "product_identifier": "locket.gold.yearly"
};

$done({ body: JSON.stringify(obj) });
