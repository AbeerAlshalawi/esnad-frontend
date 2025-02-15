import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function logout() {
    logoutApi();
    queryClient.removeQueries(["user"]);
    navigate("/login");
  }

  return { logout };
}
