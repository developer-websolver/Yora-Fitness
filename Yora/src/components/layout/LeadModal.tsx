import { useUi } from "../../context/UiContext";
import { FieldLabel, TextInput } from "../ui/Field";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";

export function LeadModal() {
  const { leadTitle, closeLead, showToast } = useUi();

  return (
    <Modal open={Boolean(leadTitle)} onClose={closeLead}>
      <div className="text-center">
        <span className="text-[10px] font-extrabold text-crimson uppercase tracking-widest">Connect With Us</span>
        <h3 className="text-xl font-bold text-white mt-1">{leadTitle}</h3>
        <p className="text-xs text-neutral-400 mt-1">Fill out your details below and our team will get in touch shortly.</p>
      </div>
      <form
        className="space-y-3 mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          closeLead();
          showToast("Thank you! Our franchise director will contact you within 24 hours.");
        }}
      >
        <FieldLabel>Full Name</FieldLabel>
        <TextInput placeholder="Full Name" required />
        <TextInput type="tel" placeholder="Phone Number" required />
        <TextInput type="email" placeholder="Email Address" required />
        <Button type="submit" className="w-full py-3 rounded-xl text-xs">
          Submit Request ↗
        </Button>
      </form>
    </Modal>
  );
}
