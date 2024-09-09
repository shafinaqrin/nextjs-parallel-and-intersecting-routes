"use client";

// ReactJS
import { useEffect, useState } from "react";

// NextJS
import { useRouter } from "next/navigation";

// ShadCN Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ModelOneModal() {
  const [openDialog, setOpenDialog] = useState(false);

  const router = useRouter();

  const handleOpenDialog = (open: boolean) => {
    setOpenDialog(open);
    if (!open) {
      router.back();
      setOpenDialog(!open);
    }
  };

  useEffect(() => {
    setOpenDialog(true);
  }, []);

  return (
    <Dialog open={openDialog} onOpenChange={handleOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
