interface ApplicationHeaderProps {
  organizationTitle: string;
  title: string;
  nameOfUser: string;
}

export const ApplicationHeader = ({
  organizationTitle,
  title,
  nameOfUser,
}: ApplicationHeaderProps) => {
  return (
    <div>
      <div>
        <div>{organizationTitle}</div>
        <div>{title}</div>
      </div>
      <div>
        <div>{nameOfUser}</div>
        <div>Útskrá</div>
      </div>
    </div>
  );
};
