document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#flightSearch");
  if(form){
    form.addEventListener("submit", e => {
      e.preventDefault();
      const from = document.querySelector("#from").value.trim() || "NYC";
      const to = document.querySelector("#to").value.trim() || "LAX";
      const dep = document.querySelector("#depart").value || "";
      const ret = document.querySelector("#return").value || "";
      const params = new URLSearchParams({from,to,dep,ret});
      window.location.href = "results.html?" + params.toString();
    });
  }
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
      const rt = document.querySelector("#return");
      if(rt) rt.disabled = tab.dataset.type === "oneway";
    });
  });
});