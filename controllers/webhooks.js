import { webhooks } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new webhooks.Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verifying the webhook
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "User.created": {
        const userData = {
          _id: data.id,
          email: data.email_address[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.create(userData);
        res.json({ success: true });
        break;
      }

      case "User.updated": {
        const userData = {
          email: data.email_address[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        res.json({ success: true });
        break;
      }

      case "User.deleted": {
        await User.findByIdAndDelete(data.id);
        res.json({ success: true });
        break;
      }

      default:
        res
          .status(400)
          .json({ success: false, message: "Unhandled webhook event" });
        break;
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
