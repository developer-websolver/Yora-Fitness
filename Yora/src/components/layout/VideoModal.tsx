import { PlayCircle } from "@phosphor-icons/react";
import { useUi } from "../../context/UiContext";
import { Modal } from "../ui/Modal";

export function VideoModal() {
  const { videoOpen, closeVideo } = useUi();
  return (
    <Modal open={videoOpen} onClose={closeVideo} wide>
      <div className="aspect-video flex flex-col items-center justify-center space-y-4 p-8 text-center">
        <PlayCircle weight="bold" className="text-6xl text-crimson animate-pulse" size={72} />
        <h3 className="text-xl font-bold text-white">YORA Fitness Brand Overview Video</h3>
        <p className="text-xs text-neutral-400 max-w-md">
          Experience our luxury facilities, bio-mechanical machinery, and high-energy group fitness environments in action.
        </p>
      </div>
    </Modal>
  );
}
