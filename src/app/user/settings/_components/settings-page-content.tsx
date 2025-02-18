import EmailForm from "./email-form";
import PasswordForm from "./password-form";
import UserNameForm from "./username-form";
import DeleteAccount from "./delete-account";

interface SettingsPageContentProps {
  username: string;
  email: string;
}

const SettingsPageContent = ({ username, email }: SettingsPageContentProps) => {
  return (
    <div className="mx-auto mt-8 max-w-[1200px] space-y-8 p-4">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Change Username</h2>
        <UserNameForm username={username} />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Change Email</h2>
        <EmailForm email={email} />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Change Password</h2>
        <PasswordForm />
      </div>

      <DeleteAccount />
    </div>
  );
};

export default SettingsPageContent;
