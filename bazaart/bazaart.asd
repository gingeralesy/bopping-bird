(in-package #:cl-user)
(asdf:defsystem #:bazaart
  :version "0.1"
  :description "Bazaart - Art Trade."
  :author "Janne"
  :defsystem-depends-on (:radiance :r-clip)
  :class "radiance:module"
  :components ((:file "bazaart"))
  :depends-on NIL)
