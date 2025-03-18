"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface UnlikeConfirmationModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onConfirm: () => void;
}

const UnlikeConfirmationModal: React.FC<UnlikeConfirmationModalProps> = ({
  isOpen,
  setIsOpen,
  onConfirm,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Remove Like</DialogTitle>
          <DialogDescription>
            Do you want to unlike this meal?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-between sm:justify-between gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            No, Keep Like
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            className="bg-button-primary hover:bg-button-primary-hover text-base"
          >
            Yes, Unlike
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UnlikeConfirmationModal;
