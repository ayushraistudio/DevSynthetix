import { getContacts, saveContact } from "../services/contactStore.js";
import { validateContactPayload } from "../utils/validateContact.js";

export async function createContact(req, res, next) {
  try {
    const payload = {
      name: req.body.name?.trim(),
      email: req.body.email?.trim(),
      company: req.body.company?.trim() || "",
      message: req.body.message?.trim()
    };

    const validation = validateContactPayload(payload);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: validation.errors.join(" ")
      });
    }

    await saveContact(payload);

    return res.status(201).json({
      success: true,
      message: "Thanks for reaching out. Our team will contact you soon."
    });
  } catch (error) {
    return next(error);
  }
}

export async function listContacts(req, res, next) {
  try {
    const contacts = await getContacts();
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    return next(error);
  }
}
