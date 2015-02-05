(in-package #:cl-user)
(asdf:defsystem #:bazaart
  :version "0.1"
  :description "Bazaart - Art Trade."
  :author "Janne"
  :defsystem-depends-on (:radiance)
  :class "radiance:module"
  :components ((:file "bazaart"))
  :depends-on (:r-clip))
