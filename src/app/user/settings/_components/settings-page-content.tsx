import { Button } from "@/components/ui/button";
import EmailForm from "./email-form";
import PasswordForm from "./password-form";
import UserNameForm from "./username-form";

const SettingsPageContent = () => {
  return (
    <div className="mx-auto mt-8 max-w-[1200px] space-y-8 p-4">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Change Username</h2>
        <UserNameForm />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Change Email</h2>
        <EmailForm />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Change Password</h2>
        <PasswordForm />
      </div>

      <Button variant={"destructive"}>Delete Account</Button>
    </div>
  );
};

export default SettingsPageContent;
